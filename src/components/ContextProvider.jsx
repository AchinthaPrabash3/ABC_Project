/* eslint-disable react/prop-types */
import { LocationProvider } from "./LocationContext";
import { LoginProvider } from "./LoginContext";
import { SaveResProvider } from "./ResrveContext";
import { SaveOrdersProvider } from "./SaveToLocalContext";

const ContextProvider = ({ children }) => {
  return (
    <LoginProvider>
      <SaveResProvider>
        <SaveOrdersProvider>
          <LocationProvider>{children}</LocationProvider>
        </SaveOrdersProvider>
      </SaveResProvider>
    </LoginProvider>
  );
};
export default ContextProvider;
