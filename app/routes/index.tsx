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
      <div className="flex h-screen justify-center items-center">
        <div className="grid grid-cols-7 max-w-md">
          {new Array(offset).fill(null).map((_, index) => (
            <div key={index} />
          ))}
          {days.map((day) => (
            <div
              key={day.toISODate()}
              className={clsx(
                "text-center text-5x1 font-bold p-4 tabular-nums",
                day.toISODate() === DateTime.now().toISODate() &&
                  "text-red-500 bg-text-red-200 shadow"
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
