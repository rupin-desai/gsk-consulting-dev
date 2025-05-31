import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InterHero from '../components/International/InterHero';
import InterInfo from '../components/International/InterInfo';
import InterAbout from '../components/International/InterAbout';
import InterOutcomes from '../components/International/InterOutcomes';
import InterCurriculum from '../components/International/InterCurriculum';
import InterProspects from '../components/International/InterProspects';
import { getCourseData } from '../utils/courseUtils';

const InternationalEducation = () => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If no course slug is provided, redirect to the default course
    if (!courseSlug) {
      navigate('/international-education/drone-operations', { replace: true });
      return;
    }

    // Fetch course data
    const data = getCourseData(courseSlug);
    
    // If no data found for this slug, redirect to not found or default course
    if (!data) {
      navigate('/international-education/drone-operations', { replace: true });
      return;
    }
    
    // Set course data
    setCourseData(data);
    setLoading(false);
  }, [courseSlug, navigate]);

  if (loading || !courseData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#00B5CA]"></div>
      </div>
    );
  }

  return (
    <div className='overflow-hidden'>
      <InterHero data={courseData.hero} />
      <InterInfo data={courseData.info} />
      {courseData.about && <InterAbout data={courseData.about} />}
      {courseData.outcomes && <InterOutcomes data={courseData.outcomes} />}
      {courseData.curriculum && <InterCurriculum data={courseData.curriculum} />}
      {courseData.prospects && <InterProspects data={courseData.prospects} />}
    </div>
  );
};

export default InternationalEducation;