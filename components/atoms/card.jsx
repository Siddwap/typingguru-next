import { motion } from 'framer-motion';
import classNames from 'classnames';

const Card = ({ children, className = '', varient = 'lg' }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1 }}
    className={classNames(
      `bg-primary-50 shadow-lg text-primary-900 rounded-xl flex flex-col select-none cursor-pointer`,
      className,
      {
        'p-6 gap-6': varient === 'lg',
        'p-3': varient === 'sm',
      }
    )}
  >
    {children}
  </motion.div>
);

export default Card;
