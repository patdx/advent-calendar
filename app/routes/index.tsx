import { DateTime } from "luxon";
import clsx from "clsx";

export default function Index() {
  const date = DateTime.fromObject({ month: 12 });

  const firstDay = date.startOf("month");

  const offset = firstDay.weekday === 7 ? 0 : firstDay.weekday;

  const days: DateTime[] = [];

  for (let index = 0; index < 31; index++) {
    const day = firstDay.set({
      day: index + 1,
    });
    days.push(day);
  }

  return (
    <>
      <div
        className="flex h-screen justify-center items-center"
        data-instant={DateTime.now().toJSON()}
        data-local-time={DateTime.now().toLocaleString(
          DateTime.TIME_24_WITH_SECONDS
        )}
      >
        <div className="grid grid-cols-7 max-w-md">
          {new Array(offset).fill(null).map((_, index) => (
            <div key={index} />
          ))}
          {days.map((day) => (
            <div
              key={day.toISODate()}
              className={clsx(
                "flex flex-col justify-center text-center w-16 h-16 text-5x1 font-bold tabular-nums rounded",
                day.toISODate() === DateTime.now().toISODate() &&
                  "text-red-500 bg-red-200 border-2 border-red-300 border"
              )}
            >
              {day.day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
