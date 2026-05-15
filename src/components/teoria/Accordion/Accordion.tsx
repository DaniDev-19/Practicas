import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import type { AccordionItem } from '../../../data/teoria';
import styles from './Accordion.module.css';

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.accordion} role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <article
            key={i}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
            role="listitem"
          >
            <button
              className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={styles.questionContainer}>
                <span className={styles.number}>{i + 1}</span>
                {item.question}
              </span>
              <FiChevronDown
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
              />
            </button>
            {isOpen && (
              <div className={styles.body} role="region">
                <p>{item.answer}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
};
