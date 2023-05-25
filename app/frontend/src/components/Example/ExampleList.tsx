import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How can I repair the kickstand of my Microsoft Surface?",
        value: "How can I repair the kickstand of my Microsoft Surface?"
    },
    { text: "What Laptop Models do you recommend for Development?", value: "What Laptop Models do you recommend for Development?" },
    { text: "How much ram does a Microsoft Surface Laptop Go have?", value: "How much ram does a Microsoft Surface Laptop Go have?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};