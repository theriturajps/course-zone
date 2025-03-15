import Image from "next/image";
import ShowAllCourse from "./components/ShowAllCourse";


export default function Home() {
  return (
    <>
      <div className="text-center mt-4">
        <h1 className="text-2xl">Welcome To CourseZone - We Offer Following Courses</h1>
      </div>

      <ShowAllCourse />
      
    </>
  );
}
