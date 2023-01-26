import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <><><button key={client.name} className={`bg-blue-gradient py-10 rounded-[10px] flex-3 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <h4 className="hover:text-white hover:font-bold font-poppins font-medium text-primary text-[20px] leading-[27px]">
            {client.name}
          </h4>
        </button><br className="sm:block hidden" /></><br className="sm:block hidden" /></>
      ))}
    </div>
  </section>
);

export default Clients;