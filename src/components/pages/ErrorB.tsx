
import { useRouteError } from 'react-router-dom'

const ErrorB = () => {
  const e: unknown = useRouteError();

  if (typeof e === 'object' && e !== null && 'message' in e) {
    const error = e as { message: string };
    return <div>Error: {error.message}</div>;
  }

  return <div>Unknown error</div>;
};
export default ErrorB
