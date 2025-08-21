import React, { useState, useEffect } from 'react';
import StaffCard from '../ui/StaffCard';
import SkeletonCard from '../ui/SkeletonCard';
import { fetchStaff } from '../../api/apiService';

function StaffSection() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStaff = async () => {
      setLoading(true);
      try {
        const staffData = await fetchStaff();
        setStaff(staffData);
      } catch (error) {
        console.error("Failed to load staff", error);
      } finally {
        setLoading(false);
      }
    };

    getStaff();
  }, []);

  return (
    <section id="staff" className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00008B] mb-12 font-display">
          Our Staff
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center">
                <SkeletonCard className="w-40 h-40 rounded-full mx-auto mb-4" />
                <SkeletonCard className="h-6 w-3/4 mx-auto mb-2" />
                <SkeletonCard className="h-4 w-1/2 mx-auto" />
              </div>
            ))
          ) : staff.length > 0 ? (
            staff.map((member) => (
              <StaffCard
                key={member._id}
                name={member.name}
                designation={member.designation}
                imageUrl={member.imageUrl}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No staff information available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default StaffSection;
