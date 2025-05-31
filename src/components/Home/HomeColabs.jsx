import React from "react";

const HomeColabs = () => {
  // Array of collaboration partner images (you'll need to replace these with actual GSK client/partner logos)
  const colabPartners = [
    {
      id: 1,
      image: "/colabs/client1.png",
      alt: "Client Partner 1",
    },
    {
      id: 2,
      image: "/colabs/client2.png",
      alt: "Client Partner 2",
    },
    {
      id: 3,
      image: "/colabs/client3.png",
      alt: "Client Partner 3",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-[#e6b400] mx-auto mt-4"></div>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {colabPartners.map((partner) => (
            <div key={partner.id} className="flex justify-center items-center">
              <div className="transition duration-300 hover:scale-105 mx-auto">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="w-full h-auto max-w-[200px] mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeColabs;
