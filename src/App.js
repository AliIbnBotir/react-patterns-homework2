import './App.css';
import DataTable from "./components/DataTable";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "ksajdkas"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "asdklalksd"
  },
  {
    id: 3,
    name: "John Smith",
    email: "asdkljoadj"
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "asldjasijdo"
  }
]
const columns = [
  {
    title: "ID",
    key: "id",
    show: false,
  },
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Email",
    key: "email"
  }
]
function App() {
  return (
    <div className="App">
      <DataTable
          tableData={{
            data,
            columns
          }}/>
    </div>
  );
}

export default App;
