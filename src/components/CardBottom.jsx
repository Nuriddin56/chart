import React from "react";

const chartData = [
  {
    id: 1,
    weekDays: "monday",
    value: 42,
  },
  {
    id: 2,
    weekDays: "tuesday",
    value: 31,
  },
  {
    id: 3,
    weekDays: "wednesday",
    value: 54,
  },
  {
    id: 4,
    weekDays: "thursday",
    value: 24,
  },
  {
    id: 5,
    weekDays: "friday",
    value: 76,
  },
  {
    id: 6,
    weekDays: "saturday",
    value: 60,
  },
  {
    id: 7,
    weekDays: "sunday",
    value: 18,
  },
];

function CardBottom() {
  const [maxChart] = [...chartData].sort((a, b) => {
    return b.value - a.value;
  });

  function chartHeight(h) {
    let height = 150;
    let { value } = maxChart;

    console.log();

    return `${((h * 100) / value).toFixed(1)}%`;
  }

  return (
    <div className="bg-light pt-8 p-10 rounded-[1.25rem]">
      <h1 className="text-dark-brown font-bold text-[2rem] mb-[4.125rem]">
        Spending - Last 7 days
      </h1>
      <ul className="w-full flex justify-between gap-2">
        {chartData.map((ch) => {
          return (
            <li
              className="w-[3.125rem] flex flex-col gap-2 text-center"
              key={ch.id}
            >
              <div className="flex items-end h-[150px] relative">
                <div
                  style={{ height: chartHeight(ch.value) }}
                  className={`chart-item rounded[5px] w-full ${
                    ch.value == maxChart.value ? "bg-cyan" : "bg-red"
                  } relative`}
                >
                  <span className="absolute -top-2 left-[50%] -translate-x-[50%] -translate-y-[100%]">
                    ${ch.value}
                  </span>
                </div>
              </div>
              <span className="w-full">{ch.weekDays.slice(0, 3)}</span>
            </li>
          );
        })}
      </ul>
      <div className="border-t bg-cream my-6"></div>
      <div className="bg-very-pale-orange mt-8 p-6 rounded-[1rem] flex items-center justify-between">
        <div>
          <p className="text-medium-brown text-sm">Total this month</p>
          <h2 className="text-dark-brown font-bold text-3xl">$478.33</h2>
        </div>
        <div className="text-right">
          <p className="text-dark-brown font-semibold">+2.4%</p>
          <p className="text-medium-brown text-sm">from last month</p>
        </div>
      </div>
    </div>
  );
}

export default CardBottom;
