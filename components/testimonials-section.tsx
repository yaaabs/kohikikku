"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, User } from "lucide-react"
import Image from "next/image"

const testimonials = [
	{
		name: "JB Balete",
		text: "Budget friendly food and drinks.. With a good view of the Caloocan City People's Park. Best iced coffee",
		rating: 5,
		source: "Facebook",
	},
	{
		name: "Erica Gene Caparas",
		text: "Super good ng ambiance! A place to go for me 💕",
		rating: 5,
		source: "Google",
	},
	{
		name: "Georgie Cudia",
		text: "sisig and clubhouse sandwich are must try!",
		rating: 5,
		source: "Google",
	},
	{
		name: "Rey Martin Apostol",
		text: "Nice ambiance, good coffee and pricey cake—tiramisu didn't taste like tiramisu.",
		rating: 5,
		source: "Google",
	},
	{
		name: "pisceanrat",
		text: "A unique concept. Aesthetically pleasing since there are kicks on display which are also for sale. Liked the matcha frappe, 200, sweet floral taste. The Americano with caramel pump is good too.",
		rating: 4,
		source: "Google",
	},
]

export function TestimonialsSection() {
	return (
		<section
			className="py-12 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden relative"
			style={{ backgroundColor: "#F8F1E7" }}
		>
			{/* Background decoration */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#d4a574] to-[#a1887f]"></div>
				<div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#6d4c41] to-[#3e2723]"></div>
			</div>

			<div className="mx-auto max-w-7xl relative z-10">
				<div className="mb-10 md:mb-20 text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 md:mb-6">
						<span className="text-xs md:text-small font-medium text-coffee-medium">
							⭐ Customer Reviews
						</span>
					</div>
					<h2 className="mb-4 md:mb-6 heading-section text-coffee-dark text-balance">
						What Our Customers Say
					</h2>
					<p className="mx-auto max-w-2xl text-sm md:text-body-large text-coffee-medium/90">
						Real reviews from our amazing customers who love our coffee
						experience
					</p>
				</div>

				{/* Responsive marquee container with smooth animation */}
				<div className="marquee-container relative overflow-hidden w-full">
					<div className="marquee-track flex animate-scroll gap-3 md:gap-6">
						{/* First set of testimonials */}
						{testimonials.map((testimonial, index) => (
							<Card
								key={`testimonial-a-${index}`}
								className="testimonial-card min-w-[260px] sm:min-w-[320px] flex-shrink-0 border-white/20 shadow-md hover:shadow-lg transition-shadow duration-300 md:min-w-[420px] bg-white/90 backdrop-blur-sm"
							>
								<CardContent className="p-4 md:p-6 lg:p-8 relative">
									<div className="mb-3 md:mb-6 flex items-center justify-between">
										<div className="flex gap-1">
											{Array.from({ length: 5 }).map((_, i) => (
												<Star
													key={i}
													className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-200`}
													style={{
														fill:
															i < testimonial.rating
																? "#d4a574"
																: "#d1d5db",
														color:
															i < testimonial.rating
																? "#d4a574"
																: "#d1d5db",
													}}
												/>
											))}
										</div>
										<div className="flex items-center gap-1 md:gap-2">
											{testimonial.source === "Google" ? (
												<div className="flex items-center">
													<span className="text-green-500 mr-1">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="14"
															height="14"
															viewBox="0 0 24 24"
															fill="currentColor"
															className="md:w-4 md:h-4"
														>
															<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
															<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
															<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
															<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
														</svg>
													</span>
													<span className="text-[10px] md:text-xs font-medium text-coffee-medium uppercase tracking-wide">
														{testimonial.source}
													</span>
												</div>
											) : testimonial.source === "Facebook" ? (
												<div className="flex items-center">
													<span className="text-blue-500 mr-1">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="currentColor"
														>
															<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
														</svg>
													</span>
													<span className="text-[10px] md:text-xs font-medium text-coffee-medium uppercase tracking-wide">
														{testimonial.source}
													</span>
												</div>
											) : (
												<div className="flex items-center">
													<span className="text-purple-500 mr-1">
														<CheckCircle className="h-4 w-4" />
													</span>
													<span className="text-[10px] md:text-xs font-medium text-coffee-medium uppercase tracking-wide">
														{testimonial.source}
													</span>
												</div>
											)}
										</div>
									</div>
									<blockquote className="mb-4 md:mb-6 text-coffee-dark text-xs md:text-small font-light italic leading-relaxed line-clamp-4 md:line-clamp-none">
										"{testimonial.text}"
									</blockquote>
									<div className="flex items-center gap-2 md:gap-3">
										<div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
											<Image
												src="/placeholder-user.jpg"
												alt={`${testimonial.name} profile picture`}
												width={40}
												height={40}
												className="object-cover w-full h-full"
											/>
										</div>
										<div>
											<p className="font-display font-semibold text-coffee-dark text-xs md:text-sm">
												{testimonial.name}
											</p>
											<p className="text-[10px] md:text-xs text-coffee-medium">
												Verified Customer
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
						{/* Duplicate set for seamless looping */}
						{testimonials.map((testimonial, index) => (
							<Card
								key={`testimonial-b-${index}`}
								className="testimonial-card min-w-[260px] sm:min-w-[320px] flex-shrink-0 border-white/20 shadow-md hover:shadow-lg transition-shadow duration-300 md:min-w-[420px] bg-white/90 backdrop-blur-sm"
							>
								<CardContent className="p-4 md:p-6 lg:p-8 relative">
									<div className="mb-3 md:mb-6 flex items-center justify-between">
										<div className="flex gap-1">
											{Array.from({ length: 5 }).map((_, i) => (
												<Star
													key={i}
													className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-200`}
													style={{
														fill:
															i < testimonial.rating
																? "#d4a574"
																: "#d1d5db",
														color:
															i < testimonial.rating
																? "#d4a574"
																: "#d1d5db",
													}}
												/>
											))}
										</div>
										<div className="flex items-center gap-1 md:gap-2">
											{testimonial.source === "Google" ? (
												<div className="flex items-center">
													<span className="text-green-500 mr-1">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="14"
															height="14"
															viewBox="0 0 24 24"
															fill="currentColor"
															className="md:w-4 md:h-4"
														>
															<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
															<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
															<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
															<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
														</svg>
													</span>
													<span className="text-[10px] md:text-xs font-medium text-coffee-medium uppercase tracking-wide">
														{testimonial.source}
													</span>
												</div>
											) : testimonial.source === "Facebook" ? (
												<div className="flex items-center">
													<span className="text-blue-500 mr-1">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="currentColor"
														>
															<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
														</svg>
													</span>
													<span className="text-[10px] md:text-xs font-medium text-coffee-medium uppercase tracking-wide">
														{testimonial.source}
													</span>
												</div>
											) : (
												<div className="flex items-center">
													<span className="text-purple-500 mr-1">
														<CheckCircle className="h-4 w-4" />
													</span>
													<span className="text-[10px] md:text-xs font-medium text-coffee-medium uppercase tracking-wide">
														{testimonial.source}
													</span>
												</div>
											)}
										</div>
									</div>
									<blockquote className="mb-4 md:mb-6 text-coffee-dark text-xs md:text-small font-light italic leading-relaxed line-clamp-4 md:line-clamp-none">
										"{testimonial.text}"
									</blockquote>
									<div className="flex items-center gap-2 md:gap-3">
										<div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
											<Image
												src="/placeholder-user.jpg"
												alt={`${testimonial.name} profile picture`}
												width={40}
												height={40}
												className="object-cover w-full h-full"
											/>
										</div>
										<div>
											<p className="font-display font-semibold text-coffee-dark text-xs md:text-sm">
												{testimonial.name}
											</p>
											<p className="text-[10px] md:text-xs text-coffee-medium">
												Verified Customer
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Trust indicators - more responsive */}
				<div className="mt-10 md:mt-16 text-center">
					<div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-[#6d4c41]">
						<div className="flex items-center gap-1 md:gap-2">
							<CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
							<span>Verified Reviews</span>
						</div>
						<div className="flex items-center gap-1 md:gap-2">
							<User className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
							<span>Real Customers</span>
						</div>
						<div className="flex items-center gap-1 md:gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-purple-500 md:w-4 md:h-4"
							>
								<path d="m9 12 2 2 4-4" />
								<path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" />
								<rect x="3" y="9" width="18" height="12" rx="2" />
							</svg>
							<span>Authentic Feedback</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
