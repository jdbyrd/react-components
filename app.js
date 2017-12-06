class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      bought: false,
      isHovered: false
    };
  }
  
  onListItemClick() {
    this.setState({bought: !this.state.bought})
  }
  
  onMouseHover() {
    this.setState({isHovered: !this.state.isHovered})
  }
  
  
  render() {
    var style = {
      textDecoration: this.state.bought ? 'line-through' : 'none',
      fontWeight: this.state.isHovered ? 'bold' : 'normal'
    }; 
    
    return (
      <li
        style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseEnter={this.onMouseHover.bind(this)}
        onMouseLeave={this.onMouseHover.bind(this)}
      >
        {this.props.food}
      </li>
    );
  }
}


var GroceryList = (props) => {
  
  return(
    <ul>
      {props.foods.map(food => 
        <GroceryListItem food={food} />
        )}
    </ul>
  );
}


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList foods={['bread', 'milk']}/>
  </div>
)




ReactDOM.render(<App />, document.getElementById('app'));

//onClick={onListItemClick}
//  var onListItemClick = (event) => {
//       console.log('CLICKED');
//     }