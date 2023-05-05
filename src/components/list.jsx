import { useEffect, useState, useRouter } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { SiVelog } from "react-icons/si";
import axios from "axios";

const List = ({ team, name, url, git }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    gitValidation();
  }, []);

  // 깃허브 아이디가 유효할 경우에만 true
  const [gitResult, setGitResult] = useState(false);

  // 깃허브 아이디 조회가 완료되면 false로 변경
  const [gitResultLoading, setGitResultLoading] = useState(true);

  /**
   * 깃허브 아이디가 유효한지 확인하는 함수
   */
  const gitValidation = async () => {
    try {
      await axios.get(
        `https://github-contributions-api.jogruber.de/v4/${git}?y=last`
      );
      setGitResult(true);
    } catch (err) {
      setGitResult(false);
    }
    setGitResultLoading(false);
  };

  // type
  interface Day {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }

  // 최근 5개월만 return하는 함수
  const selectLastHalfYear = (contributions: Day[]) => {
    // 현재 연/월
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    // 노출할 기간(달)
    const shownMonths = 5;

    return contributions.filter((day: Day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      // 현재 날짜가 6월~12월 사이인 경우
      if (currentMonth >= 5)
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );

      // 현재 날짜가 1월~5월인 경우
      return (
        // 올해
        (date.getFullYear() === currentYear && monthOfDay <= currentMonth) ||
        // 작년
        (date.getFullYear() === currentYear - 1 &&
          monthOfDay > currentMonth + 11 - shownMonths)
      );
    });
  };

  return (
    <div className="mr-4 text-lg">
      <div className="flex items-center">
        {name}
        <SiVelog className="inline ml-3" />
      </div>
      {!gitResultLoading && gitResult ? (
        <GitHubCalendar
          username={git}
          blockSize={12}
          transformData={selectLastHalfYear}
        ></GitHubCalendar>
      ) : (
        <p>깃허브 아이디를 등록해주세요.</p>
      )}
    </div>
  );
};

export default List;
