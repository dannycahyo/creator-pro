import {
  Heading,
  Text,
  Code,
  Link,
  ListItem,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownComponentProps {
  content: string;
}

const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  content,
}) => {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <Heading as="h1" size="2xl" {...props} />,
        h2: (props) => <Heading as="h2" size="xl" {...props} />,
        h3: (props) => <Heading as="h3" size="lg" {...props} />,
        h4: (props) => <Heading as="h4" size="md" {...props} />,
        h5: (props) => <Heading as="h5" size="sm" {...props} />,
        h6: (props) => <Heading as="h6" size="xs" {...props} />,
        p: (props) => <Text mb={2} {...props} />,
        a: (props) => <Link color="teal.500" {...props} />,
        li: (props) => <ListItem {...props} />,
        ul: (props) => <UnorderedList {...props} />,
        ol: (props) => <OrderedList {...props} />,
        code: (props) => <Code {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;
