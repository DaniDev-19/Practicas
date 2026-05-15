import { TIPS } from '../../../data/tips';
import { Button } from '../../ui/Button/Button';
import styles from './TipsTable.module.css';

interface TipsTableProps {
  onViewExample: (id: number) => void;
}

export const TipsTable = ({ onViewExample }: TipsTableProps) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Consejo</th>
            <th>Aplicación</th>
            <th className="text-center">Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          {TIPS.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className={styles.consejo}>{item.consejo}</td>
              <td className={styles.aplicacion}>{item.aplicacion}</td>
              <td className="text-center">
                <Button 
                  variant="ghost" 
                  onClick={() => onViewExample(item.id)}
                  className={styles.btn}
                >
                  Ver ejemplo
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
