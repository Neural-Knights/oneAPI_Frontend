import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from "react";

const LogContext = createContext({});

const LogProvider = ({ children }: any) => {
	const session = useSession();
	const name = session.data?.user?.name as string;
	const email = session.data?.user?.email as string;
	const image = session.data?.user?.image as string;
	const [log, setLog] = useState<number>(0);
	const [currentUser, setCurrentUser] = useState<object>([]);
	const [recammandData, setRecammandData] = useState<object>([]);
	const [messages, setMessages] = useState<object>([]);
	const signup = () => {
		setLog(1);
	};
	const login = () => {
		setLog(2);
	};

	function savedEventsReducer(state: any, { type, payload }: any) {
		switch (type) {
			case "push":
				return [...state, payload];
			case "update":
				return state.map((evt: any) => (evt.id === payload.id ? payload : evt));
			case "delete":
				return state.filter((evt: any) => evt.id !== payload.id);
			default:
				throw new Error();
		}
	}
	function initEvents() {
		const storageEvents =
			typeof localStorage !== "undefined"
				? localStorage.getItem("savedEvents")
				: null;
		const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
		return parsedEvents;
	}
	const [monthIndex, setMonthIndex] = useState(dayjs().month()) as any;
	const [smallCalendarMonth, setSmallCalendarMonth] = useState(null) as any;
	const [daySelected, setDaySelected] = useState(dayjs()) as any;
	const [showEventModal, setShowEventModal] = useState(false) as any;
	const [selectedEvent, setSelectedEvent] = useState(null) as any;
	const [labels, setLabels] = useState([]) as any;
	const [savedEvents, dispatchCalEvent] = useReducer(
		savedEventsReducer,
		[],
		initEvents
	) as any;

	const filteredEvents = useMemo(() => {
		return savedEvents.filter((evt: any) =>
			labels
				.filter((lbl: any) => lbl.checked)
				.map((lbl: any) => lbl.label)
				.includes(evt.label)
		);
	}, [savedEvents, labels]);

	useEffect(() => {
		if (typeof localStorage !== "undefined") {
			localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
		}
	}, [savedEvents]);

	useEffect(() => {
		setLabels((prevLabels: any) => {
			return Array.from(new Set(savedEvents.map((evt: any) => evt.label))).map(
				(label) => {
					const currentLabel = prevLabels.find(
						(lbl: any) => lbl.label === label
					);
					return {
						label,
						checked: currentLabel ? currentLabel.checked : true,
					};
				}
			);
		});
	}, [savedEvents]);

	useEffect(() => {
		if (smallCalendarMonth !== null) {
			setMonthIndex(smallCalendarMonth);
		}
	}, [smallCalendarMonth]);

	useEffect(() => {
		if (!showEventModal) {
			setSelectedEvent(null);
		}
	}, [showEventModal]);

	function updateLabel(label: any) {
		setLabels(
			labels.map((lbl: any) => (lbl.label === label.label ? label : lbl))
		);
	}
	return (
		<LogContext.Provider
			value={{
				log,
				setLog,
				signup,
				login,
				messages,
				setMessages,
				currentUser,
				setCurrentUser,
				recammandData,
				setRecammandData,
				name,
				email,
				image,
				monthIndex,
				setMonthIndex,
				smallCalendarMonth,
				setSmallCalendarMonth,
				daySelected,
				setDaySelected,
				showEventModal,
				setShowEventModal,
				selectedEvent,
				setSelectedEvent,
				labels,
				setLabels,
				savedEvents,
				dispatchCalEvent,
				filteredEvents,
				updateLabel,
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
