import React from 'react'
import { allAvailableCourses } from '@/data'
import Link from 'next/link'

const ShowAllCourse = () => {
	
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
				{allAvailableCourses.map(course => (
					<div key={course.id} className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-xl shadow-lg w-full hover:translate-y-1 transition-transform duration-200 hover:shadow-xl" >
						<div className="bg-yellow-400 p-3 rounded-lg flex items-center justify-center">
							{course.icon}
						</div>
						<div className="flex-1 min-w-0">
							<h3 className="text-lg font-semibold truncate">{course.title}</h3>
							<Link href={`/${course.id}`} className="mt-2 bg-yellow-400 text-gray-900 px-3 py-1 text-sm font-semibold rounded-md hover:bg-yellow-300 transition-colors duration-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none">
								Learn More
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ShowAllCourse