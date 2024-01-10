import { TState } from "./App";

interface IProps {
    state: TState
}

const Test: React.FC<IProps> = ({ state }) => {
    return (<div>
        Hello World !
    </div>)
}

export default Test;