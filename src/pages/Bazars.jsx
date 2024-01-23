import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTableOperations from "../features/bazars/CabinTableOperations";
import CabinTable from "../features/bazars/CabinTable";
import AddBazar from "../features/bazars/AddBazar";

const Bazars = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddBazar />
      </Row>
    </>
  );
};

export default Bazars;
