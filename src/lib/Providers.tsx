"use client";

import { persistStor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
