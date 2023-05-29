import { createContext, useContext, useState } from "react";

const LogContext = createContext({});

const LogProvider = ({ children }: any) => {
	const [log, setLog] = useState<number>(0);
	const [currentUser, setCurrentUser] = useState<object>([]);
	const signup = () => {
		setLog(1);
	};
	const login = () => {
		setLog(2);
	};
	return (
		<LogContext.Provider
			value={{ log, setLog, signup, login, currentUser, setCurrentUser }}
		>
			{children}
		</LogContext.Provider>
	);
};

export const useLog = () => {
	return useContext(LogContext);
};

export default LogProvider;
