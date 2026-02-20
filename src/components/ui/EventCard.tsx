'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '@/lib/data';

interface EventCardProps {
    event: Event;
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <Link href={`/events/${event.slug}`} className="group block h-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
            >
                <div className="relative overflow-hidden w-full aspect-[4/3] group-hover:shadow-xl transition-all duration-500 rounded-t-xl">
                    <motion.div
                        className="w-full h-full relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    >
                        {event.imageUrl ? (
                            <Image
                                src={event.imageUrl}
                                alt={event.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                                <span className="text-xs font-bold uppercase tracking-widest">No Image</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#203627] via-transparent to-transparent opacity-80" />
                    </motion.div>

                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-[#e7fe41] text-[#203627] text-[10px] font-black font-montserrat-black px-3 py-1.5 uppercase tracking-wider rounded-full shadow-sm">
                            {event.category}
                        </span>
                    </div>
                </div>

                <div className="flex-grow flex flex-col bg-white p-6 rounded-b-xl relative z-10 border border-t-0 border-gray-100 group-hover:border-[#e7fe41]/30 transition-colors duration-300">
                    <h3 className="font-playfair text-[#203627] font-bold text-lg md:text-xl leading-tight mb-4 group-hover:text-amber-600 transition-colors duration-300">
                        {event.title}
                    </h3>

                    <div className="space-y-2 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                            <Calendar className="h-3.5 w-3.5 text-gray-400" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                            <MapPin className="h-3.5 w-3.5 text-gray-400" />
                            <span>{event.location}</span>
                        </div>
                    </div>

                    <div className="w-full h-1 bg-gray-100 mt-6 rounded-full overflow-hidden">
                        <div className="w-0 h-full bg-[#203627] group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
