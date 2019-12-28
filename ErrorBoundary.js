import React from 'react';

class ErrorBoundary extends React.Component
{

  state = {
    hasError : false
  };
  
  static getDerivedStateFromError(error)
  {
    return {
      hasError:true
    }
  }


  render()
  {
    if(this.state.hasError){
    return (
    <div>
       <h1>Something wrong happened!</h1>
    </div>
    );
    }
    return this.props.children;
  }




}

export default ErrorBoundary;