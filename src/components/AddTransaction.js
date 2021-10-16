import React, {useState} from 'react' 

//hook let us use state(variables) and other React features without writing a class
// to use a hook, have useState on top and do const[var, fcn] = useState();

export const AddTransaction = () => {
    const [text, setText] = useState(''); // state is kinda like variables for a function. When state changes, the component responds by re-rendering.
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                <label htmlfor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
            <div className="form-control">
            <label htmlfor="amount">Amount <br />
                (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
