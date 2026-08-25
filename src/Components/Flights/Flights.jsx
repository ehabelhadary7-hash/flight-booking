import React from 'react'
import { useState } from 'react';
import { FaMapMarkerAlt, FaUser, FaSearch,  } from 'react-icons/fa';
import { FaExchangeAlt } from "react-icons/fa";
import { MdDateRange } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { airports } from '../Data/Airports';
import { Link } from 'react-router-dom';


function Flights() {

  const navigate = useNavigate();
  const handleSubmit = () => {

    if (!flight.from) {
      alert("Select origin");
      return;
    }

    if (!flight.to) {
      alert("Select destination");
      return;
    }

    if (flight.from === flight.to) {
      alert("Origin and Destintion cannot be same");
      return;
    }

    if (!flight.departureDate) {
      alert("Choose departure date");
      return;
    }

    setLoading(true);
    
    setTimeout(()=>{

    navigate ("/FlightDetails", {
      state: {
        ...flight,
        multiFlights:
        flight.tripType === "Multi City"
        ? multiFlights 
        : [],
      },
    });
    },1200)
  }

  function addFlight() {
    setMultiFlights([
      ...multiFlights,
      {
        id: Date.now(),
        from: "",
        to: "",
        departureDate: null,
      },
    ]);
  }

  const updateFlight = (id, field, value) => {
    setMultiFlights(
      multiFlights.map((item) =>
        item.id === id
          ? {...item, [field]: value}
          : item
      )
    );
  };

  const [flight, setFlight] = useState({
    tripType: "Round Trip",
    from: '',
    to: '',
    departureDate: null,
    returnDate: null,
    passengers: '1',
    classType: 'Economy',
  });

  const [multiFlights, setMultiFlights] = useState([
    {
      id: 1,
      from: "",
      to: "",
      departureDate: null,
    },
  ]);

  const [loading, setLoading] = useState(false);

  const tripTypes = [
    "Round Trip",
    "One Way",
    "Multi City",
  ];

  const allFlights = [
  {
    id: 1,
    from: "CAI",
    to: "DXB",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/imagesd.jfif',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    from: "CAI",
    to: "AUH",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/auh.jfif',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    from: "CAI",
    to: "RUH",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/ruh.jfif',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    from: "CAI",
    to: "JED",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/jed.jfif',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    from: "CAI",
    to: "DOH",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/doh.jfif',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 6,
    from: "CAI",
    to: "KWI",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/صور-جوية-عالية-الدقة-للكويت-باستخدام-الدرونز-1663611599588.jpeg',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 7,
    from: "CAI",
    to: "IST",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/ist.jpg',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 8,
    from: "CAI",
    to: "LHR",
    airline: "EgyptAir",
    duration: "5h 20m",
    classType: "Economy",
    price: "$420",
    imageSrc: '../../../imge/10-2518.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
]

  const filteredFlights = allFlights.filter((item) => {
    const fromMatch =
    !flight.from || item.from === flight.from;
    const toMatch = 
    !flight.to || item.to === flight.to;
    const classMatch = 
    !flight.classType || item.classType === flight.classType;
    return fromMatch && toMatch && classMatch;
  });

  return (
    <>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url('/imge/Air-India-3.webp')",
        }}
      >
        <div className="hero-overlay bg-black/50"></div>
        <div className="hero-content flex-col w-full">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-sky-400">Find The Best Flights For Your Trip</h1>
            <p className="mt-4 font-light text-sky-400">
              Book ticets easily, quickly and at the best price.
            </p>
          </div>
        </div>
        <div className='absolute md-top-20 -bottom-20  left-1/2 -translate-x-1/2 w-[90%] max-w-7xl'>
          <div className='bg-white rounded-2xl shadow-xl p-6 w-full max-w-7xl'>
            {/* tabs */}
              <div className="flex md:gap-8 md:justify-start overflow-x-auto justify-center gap-3 whitespace-nowrap border-b mb-6">
                {tripTypes.map((trip) => (
                  <button
                    key={trip}
                    onClick={() =>
                      setFlight({
                        ...flight,
                        tripType: trip,
                      })
                    }
                    className={`pb-3 font-semibold transition ${
                      flight.tripType === trip
                        ? "text-sky-400 border-b-4 border-sky-400"
                        : "text-gray-500"
                    }`}
                  >
                    {trip}
                  </button>
                ))}
              </div>
              {/* Multi City Message */}
                {flight.tripType === "Multi City" && (
                  <div className='mb-6'>
                    {multiFlights.map((item, index) =>(
                      <div key={item.id} className='border rounded-xl p-5 bg-gray-50'>
                        <h3 className='font-bold text-lg mb-4'>
                          Flight {index + 1}
                        </h3>
                        <div className='grid lg:grid-cols-3 gap-4'>
                          <select
                          className='border rounded-xl p-3'
                          value={item.from}
                          onChange={(e) => 
                            updateFlight(
                              item.id,
                              "from",
                              e.target.value
                            )
                          }
                          >
                            <option value="">Select Origin</option>
                            {airports.map((airport) => (
                              <option 
                              key={airport.code}
                              value={airport.code}
                              >
                                {airport.city}, {airport.country} ({airport.code})
                              </option>
                            ))}
                          </select>
                          <select 
                          className='border rounded-xl p-3'
                          value={item.to}
                          onChange={(e) =>
                            updateFlight(
                              item.id,
                              "to",
                              e.target.value
                            )
                          }
                          >
                            <option value="">Select Destination</option>
                            {airports.map((airport) => (
                              <option
                              key={airport.code}
                              value={airport.code}
                              >
                                {airport.city}, {airport.country} ({airport.code})
                              </option>
                            ))}
                          </select>
                          <DatePicker
                          selected={item.departureDate}
                          onChange={(date) =>
                            updateFlight(
                              item.id,
                              "departureDate",
                              date
                            )
                          }
                          minDate={new Date()}
                          placeholderText='Departure'
                          className='border rounded-xl p-3 w-full'
                          />
                        </div>
                      </div>
                    ))}
                    <button 
                      type='button'
                      onClick={addFlight}
                      className='bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl mt-2'
                    >
                      + Add Flight
                    </button>
                  </div>
                )}
            {/* Form */}
            {flight.tripType !== "Multi City" && (


            <div className="grid lg:grid-cols-25 items-end gap-4">
              <div className='lg:col-span-5'>
                <label className='text-sm text-gray-500'>
                  From
                </label>
                <div className='border rounded-xl p-3 flex items-center gap-2'>
                  <select
                    className='w-full outline-none'
                    value={flight.from}
                    onChange={(e) => setFlight({
                      ...flight,
                      from: e.target.value,
                    })}
                  >
                    <option value="">Select Origin</option>
                    {airports.map((airport) => (
                      <option
                        key={airport.code}
                        value={airport.code}
                      >
                        {airport.city}, {airport.country} ({airport.code})
                      </option>
                    ))}
                  </select>

                  <FaMapMarkerAlt />
                </div>
              </div>

              <div className='flex justify-center items-center'>
                <button
                type='button'
                onClick={() =>
                  setFlight({
                    ...flight,
                    from: flight.to,
                    to: flight.from,
                  })
                }
                className='flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-700 hover:text-white transition'
                >
                  <FaExchangeAlt />
                </button>
              </div>

              {/* To */}

              <div className='lg:col-span-5'>
                <label className='text-sm text-gray-500'>
                  To
                </label>
                <div className='border rounded-xl p-3 flex items-center gap-2'>
                  <select
                    className='w-full outline-none'
                    value={flight.to}
                    onChange={(e) => setFlight({
                      ...flight,
                      to: e.target.value,
                    })}
                  >
                    <option value="">Select Destination</option>
                    {airports.map((airport) => (
                      <option
                        key={airport.code}
                        value={airport.code}
                      >
                        {airport.city}, {airport.country} ({airport.code})
                      </option>
                    ))}
                  </select>
                  <FaMapMarkerAlt />
                </div>
              </div>

              {/* Departure */}
              <div className='lg:col-span-3'>
                <label className='text-sm text-gray-500'>
                  Departure
                </label>
                <div className='border rounded-xl p-3 flex items-center justify-between'>
                    <DatePicker
                    selected={flight.departureDate}
                    onChange={(date) =>
                      setFlight({
                        ...flight,
                        departureDate: date,
                      })
                    }
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText='select departure date'
                    className='w-full outline-none'
                    />
                  <MdDateRange />
                </div>
              </div>
              {/* Return */}
              {flight.tripType !== "One Way" && (

              <div className='lg:col-span-3'>
                <label className='text-sm text-gray-500'>
                  Return
                </label>
                <div className='border rounded-xl p-3 flex items-center justify-between'>
                  <DatePicker
                  selected={flight.returnDate}
                  onChange={(date) =>
                    setFlight({
                      ...flight,
                      returnDate: date,
                    })
                  }
                  minDate={flight.departureDate || new Date()}
                  placeholderText='select return '
                  className='w-full outline-none'
                  />
                  <MdDateRange />
                </div>
              </div>
              )}
              {/* Passenger */}
              <div className='lg:col-span-2'>
                <label className='text-sm text-gray-500'>
                  Passenger
                </label>
                <div className='border rounded-xl p-3 flex items-center gap-2'>
                  <select
                    className='w-full outline-none'
                    value={flight.passengers}
                    onChange={(e) => setFlight({
                      ...flight,
                      passengers: e.target.value,
                    })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <FaUser />
                </div>
              </div>
              {/* class */}
              <div className='lg:col-span-3'>
                <label className='text-sm text-gray-500'>
                  ClassType
                </label>
                <div className='border rounded-xl p-3'>
                  <select
                    className='w-full outline-none'
                    value={flight.classType}
                    onChange={(e) => setFlight({
                      ...flight,
                      classType: e.target.value,
                    })}
                  >
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
              {/* button */}
              <div className="lg:col-span-3 flex items-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-sky-400 hover:bg-sky-800 text-white rounded-xl w-full h-[50px] flex items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>

<div className="bg-white py-16 mt-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-sky-400">
        Available Flights
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        Choose your next destination and enjoy the best travel experience at the best prices.
      </p>
    </div>

<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {filteredFlights.map((item) => (
    <div
      key={item.id}
      className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-300"
    >
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">
          {item.airline}
        </h3>

        <p className="text-gray-500 mt-2">
          {item.from} ✈ {item.to}
        </p>

        <p className="text-gray-500">
          Duration: {item.duration}
        </p>

        <p className="text-gray-500">
          Class: {item.classType}
        </p>

        <p className="mt-3 text-sky-500 font-bold text-2xl">
          {item.price}
        </p>

        <Link to ="/FlightDetails">
        <button className="btn bg-sky-400 hover:bg-sky-500 text-white border-none w-full mt-5 rounded-full">
          Book Now
        </button>
        </Link>
      </div>
    </div>
  ))}
</div>
  </div>
</div>

    </>
  );
}

export default Flights