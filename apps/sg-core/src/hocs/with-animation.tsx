import { motion } from "framer-motion";

export function withAnimation(Component: any) {
  return function WithAnimation(props: any) {
    return (
      <motion.main
        className="h-fit min-h-screen w-screen flex justify-center items-center mt-4 mb-[88px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Component {...props} />
      </motion.main>
    );
  };
}
