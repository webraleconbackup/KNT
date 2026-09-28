import React from 'react';

const BoardMember = () => {
  const teamMembers = [
    {
      name: 'Mr. Kokuei Riku',
      title: 'Chairman',
      image: '/board/riku.jpg',
    },
    {
      name: 'Mr. Vishu Singhal',
      title: 'Operational & Technical Director',
      image: '/board/vishu.jpg',
    },
    {
      name: 'Mr. Lalit Jain',
      title: 'Managing Director',
      image: '/board/lalit.jpg',
    },
  ];
  return (
    <div>
      <section className='bg-gray-100 py-16 px-4 sm:px-8 lg:px-30 lg:text-center'>
        <div className='max-w-5xl mx-auto'>
          {/* Heading */}
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900'>
            Our Board Member
          </h2>

          {/* Underline */}
          <div className='w-20 h-1 bg-red-600 mx-auto mt-3 mb-6 rounded-full'></div>

          {/* Paragraph */}
          <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
            Behind every achievement stands a dedicated Board that combines
            wisdom, foresight, and integrity. Each member brings unique
            expertise and perspectives, working together to make informed
            decisions that strengthen our foundation and expand our horizons.
            Their leadership not only ensures responsible governance but also
            inspires innovation, resilience, and progress for the future.
          </p>
        </div>

        <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-6'
            >
              <div className='w-full aspect-square overflow-hidden rounded-lg mb-6'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {member.name}
              </h3>
              <p className='text-gray-600 text-base'>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BoardMember;
