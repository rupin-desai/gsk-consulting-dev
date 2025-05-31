import allCourseData from "../data/courseData.json";

export const getCourseData = (slug) => {
  // Return the course data based on slug, or the first course as default
  return allCourseData[slug] || Object.values(allCourseData)[0];
};

export const getAllCourses = () => {
  return Object.values(allCourseData).map((course) => ({
    slug: course.slug,
    title: course.hero.subtitle,
  }));
};
