import Button from "./components/button";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisability] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert
          onClose={() => {
            setAlertVisability(false);
          }}
        >
          My alert
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisability(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;

/*import Alert from "./components/alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>world</span>
      </Alert>
    </div>
  );
}

export default App;
*/

/*
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Tulkarm", "Jerusalem", "Gaza", "Jenen", "Ramallah"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
*/
