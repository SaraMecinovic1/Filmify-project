const ReservationInfo = () => {
  return (
    <div className="w-full h-[50vh] px-6 flex flex-col items-center justify-center text-textColor">
      <div className="w-full max-w-xl sm:max-w-lg h-auto text-center mb-7">
        <h1 className="font-semibold text-3xl mb-4 text-secondary">
          Hi Sara !
        </h1>
        <p className="font-normal  text-xl">
          Congratulations on creating a movie reservation! Your reservation id
          is <span className="font-bold">02432543w45312wr</span>. If you need a
          help, write to <span className="font-semibold">info@filmify.com</span>
        </p>
      </div>
      <div className="w-full max-w-xl sm:max-w-lg p-8 bg-[#2e2e2e] rounded-lg shadow-lg flex flex-col items-center gap-6  ">
        <h2 className="text-2xl font-semibold mb-3"> RESERVATION DETAILS </h2>
        <div className="w-full flex justify-center text-center space-y-2">
          <div className="text-left space-y-2">
            <p className="text-lg text-textColor">
              Movie:
              <span className="font-semibold ml-2 text-lg italic text-white">
                {userData?.movieTitle}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Tickets:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {totalTickets}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Date:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {userData?.date}
              </span>
            </p>
            <p className="text-lg text-textColor">
              Time:
              <span className="font-semibold ml-2 italic text-lg text-white">
                20:00 PM
              </span>
            </p>
            <p className="text-lg text-textColor">
              Seats:
              <span className="font-semibold ml-2 italic text-lg text-white">
                {userData?.seats?.join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
