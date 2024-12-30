// const Countdown = ({ timeRemaining }) => (
//   <div className="countdown-timer">
//     <div className="time-box">
//       <span className="time-number">{timeRemaining.days}</span>
//       <span className="time-label">Days</span>
//     </div>
//     <div className="time-box">
//       <span className="time-number">{timeRemaining.hours}</span>
//       <span className="time-label">Hours</span>
//     </div>
//     <div className="time-box">
//       <span className="time-number">{timeRemaining.minutes}</span>
//       <span className="time-label">Minutes</span>
//     </div>
//     <div className="time-box">
//       <span className="time-number">{timeRemaining.seconds}</span>
//       <span className="time-label">Seconds</span>
//     </div>
//   </div>
// );

interface CountdownProps {
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const Countdown: React.FC<CountdownProps> = ({ timeRemaining }) => (
  <div className="countdown-timer">
    <div className="time-box">
      <span className="time-number">{timeRemaining.days}</span>
      <span className="time-label">Days</span>
    </div>
    <div className="time-box">
      <span className="time-number">{timeRemaining.hours}</span>
      <span className="time-label">Hours</span>
    </div>
    <div className="time-box">
      <span className="time-number">{timeRemaining.minutes}</span>
      <span className="time-label">Minutes</span>
    </div>
    <div className="time-box">
      <span className="time-number">{timeRemaining.seconds}</span>
      <span className="time-label">Seconds</span>
    </div>
  </div>
);
export default Countdown;


