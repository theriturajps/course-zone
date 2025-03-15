'use client'

import React from 'react'
import { availableCourseDetails } from '@/data'
import { useRouter } from 'next/navigation'

const index = ({ params }) => {

	const { slug } = React.use(params)
	const coursedata = availableCourseDetails.filter(course => course.title.toLowerCase().includes(slug.toLowerCase()))
	const router = useRouter()

	return (
		<div className='mt-8'>

			{
				coursedata.map(course => <div key={course.id} className={`max-w-2xl mx-auto p-4 bg-gray-900 text-white rounded border ${(coursedata.length > 1) && 'mt-3'}`}>
					<h1 className="text-2xl font-bold mb-2">{course.title}</h1>

					<div className="mb-4">
						<p><strong>Duration:</strong> {course.duration}</p>
						<p><strong>Level:</strong> {course.level}</p>
					</div>

					<div className="mb-4">
						<h2 className="text-xl font-bold mb-2">Projects:</h2>
						<ul className="list-disc pl-6">
							{course.projects.map(projectlist => (
								<li key={projectlist.id}>{projectlist.title}</li>
							))}
						</ul>
					</div>

					<div className="mt-4">
						<button onClick={() => router.refresh()} className="bg-yellow-400 text-gray-900 font-semibold py-1 px-2 rounded">Enroll Now</button>
					</div>
				</div>)
			}

			<div className='max-w-max mx-auto'>
				<button onClick={() => router.back()} className="bg-blue-500 text-white py-1 px-2 mt-7 rounded">Go Back</button>
			</div>

		</div>
	)
}

export default index