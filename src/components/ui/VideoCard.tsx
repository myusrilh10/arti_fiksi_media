'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { Video } from '@/lib/data';

interface VideoCardProps {
    video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
    return (
        <div className="group block h-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
                <div className="relative overflow-hidden w-full aspect-video rounded-t-xl">
                    <motion.div
                        className="w-full h-full relative"
                    >
                        {video.imageUrl ? (
                            <Image
                                src={video.imageUrl}
                                alt={video.title}
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                                <span className="text-xs font-bold uppercase tracking-widest">No Image</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#e7fe41] group-hover:text-[#203627] text-white transition-all duration-300 scale-90 group-hover:scale-100">
                                <Play className="h-6 w-6 fill-current" />
                            </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-3 right-3 z-20">
                            <span className="bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {video.duration}
                            </span>
                        </div>
                    </motion.div>

                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/95 backdrop-blur-md text-[#203627] text-[10px] font-black font-montserrat-black px-3 py-1.5 uppercase tracking-wider rounded-full shadow-sm">
                            {video.category}
                        </span>
                    </div>
                </div>

                <div className="flex-grow flex flex-col bg-[#203627] p-6 rounded-b-xl relative z-10 border-t-0 -mt-1 group-hover:bg-[#2a4533] transition-colors duration-300">
                    <div className="flex items-center gap-3 text-[10px] text-[#e7fe41]/70 mb-3 font-bold font-montserrat-regular tracking-wide uppercase">
                        <span>{video.date}</span>
                    </div>

                    <h3 className="font-playfair text-white font-bold text-lg md:text-xl leading-tight mb-4 group-hover:text-[#e7fe41] transition-colors duration-300 line-clamp-2">
                        {video.title}
                    </h3>

                    <div className="mt-auto">
                        <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-black font-montserrat-black uppercase tracking-widest text-[#e7fe41] hover:underline flex items-center gap-2"
                        >
                            Watch Now
                            <Play className="h-3 w-3" />
                        </a>
                    </div>

                    <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
                        <div className="w-0 h-full bg-[#e7fe41] group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
