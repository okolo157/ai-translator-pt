import "../styles/Table.css";

function Table() {
  return (
    <div className="table">
      <div className="component">
        <h1 style={{ color: "white" }}>Compare Plans</h1>
        <div className="table2">
          <div className="features">
            <h2>Features</h2>
            <p>Free</p>
            <p>Pro</p>
            <p>Enterprise</p>
          </div>{" "}
          <hr />
          <div className="features">
            <h2>Credit</h2>
            <p>10/month</p>
            <p>Unlimited</p>
            <p>Unlimited</p>
          </div>{" "}
          <hr />
          <div className="features">
            <h2>Support</h2>
            <p>Basic</p>
            <p>Priority</p>
            <p>Dedicated</p>
          </div>{" "}
          <hr />
          <div className="features">
            <h2>Custom Solutions</h2>
            <p>No</p>
            <p>No</p>
            <p>Yes</p>
          </div>{" "}
          <hr />
          <div className="features">
            <h2>Access to All Features</h2>
            <p>No</p>
            <p>Yes</p>
            <p>Yes</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Table;
