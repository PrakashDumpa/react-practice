import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError() {
  //   console.log("-------------------------------------------");
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log(",,,,,,,,,,,,,,,,,,", error, errorInfo);
  }

  render() {
    console.log("Radhe RAdhe");
    if (this.state.hasError) {
      return (
        <div className="text-3xl flex flex-col h-screen justify-center items-center ">
          <h1>Something Went Wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-700 px-4 py-2 rounded"
            type="button"
          >
            <Link to="/">Refresh</Link>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
