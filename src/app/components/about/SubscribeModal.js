import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SubscribeModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white w-[90%] max-w-lg rounded-2xl shadow-xl p-6 md:p-8 py-10! relative"
                        initial={{ scale: 0.8, y: 40 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 40 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            <IoClose size={26} />
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-semibold text-center mb-2">
                            Subscribe for Wellness Tips
                        </h2>

                        <p className="text-sm text-gray-500 text-center mb-8">
                            Get health & wellness updates straight to your inbox
                        </p>

                        {/* Form */}
                        <form className="space-y-6">
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none "
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-full bg-[#2aa2de] text-white font-medium hover:bg-[#4b6f00] transition"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SubscribeModal;
