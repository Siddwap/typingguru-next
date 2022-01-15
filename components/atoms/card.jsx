import { motion } from 'framer-motion';
import classNames from 'classnames';

const Card = ({ children, className = '', varient = 'lg', cardId = '' }) => (
  <div
    // whileHover={{ scale: 1.05 }}
    // whileTap={{ scale: 1 }}
    className={classNames(
      `bg-primary-50 dark:bg-dark-primary-50 shadow-lg rounded-xl flex flex-col select-none cursor-pointer`,
      className,
      {
        'p-6 gap-6': varient === 'lg',
        'p-3': varient === 'sm',
      }
    )}
  >
    {children}
  </div>
);

export default Card;
