import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import styles from './UserGrid.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserGridProps {
  users: User[];
  loading: boolean;
}

export const UserGrid = ({ users, loading }: UserGridProps) => {
  if (loading) {
    return (
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map(k => (
          <div key={k} className={styles.skeleton} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {users.map(user => (
        <div key={user.id} className="card flex-col gap-sm">
          <div className={styles.header}>
            <div className={styles.avatar}>
              {user.name.charAt(0)}
            </div>
            <div>
              <div className={styles.name}>{user.name}</div>
              <div className={styles.website}>@{user.website}</div>
            </div>
          </div>
          <div className={styles.info}>
            <span className={styles.infoRow}><FiMail size={13} /> {user.email}</span>
            <span className={styles.infoRow}><FiPhone size={13} /> {user.phone}</span>
            <span className={styles.infoRow}><FiUser size={13} /> ID: {user.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
