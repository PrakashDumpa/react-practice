import { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    console.log("-------------------------------------------");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // this.setState({ hasError: true });
    console.log(",,,,,,,,,,,,,,,,,,", error, errorInfo);
  }
  render() {
    console.log("Radhe RAdhe");
    if (this.state.hasError) {
      return (
        <h1 className="text-3xl flex justify-center items-center flex-grow">
          Something Went Wrong
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
