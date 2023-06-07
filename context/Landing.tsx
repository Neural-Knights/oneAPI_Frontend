import { useSession } from "next-auth/react";
import { createContext, useContext, useState } from "react";

const LogContext = createContext({});

const LogProvider = ({ children }: any) => {
	const session = useSession();
	const name = session.data?.user?.name as string;
	const email = session.data?.user?.email as string;
	const image = session.data?.user?.image as string;
	const [log, setLog] = useState<number>(0);
	const [currentUser, setCurrentUser] = useState<object>([]);
	const [recammandData, setRecammandData] = useState<object>([]);
	const signup = () => {
		setLog(1);
	};
	const login = () => {
		setLog(2);
	};
	return (
		<LogContext.Provider
			value={{
				log,
				setLog,
				signup,
				login,
				currentUser,
				setCurrentUser,
				recammandData,
				setRecammandData,
				name,
				email,
				image,
			}}
		>
			{children}
		</LogContext.Provider>
	);
};

export const useLog = () => {
	return useContext(LogContext);
};

export default LogProvider;
