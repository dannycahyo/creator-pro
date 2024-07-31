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
        h1: (props) => (
          <Heading mb={4} as="h1" size="xl" {...props} />
        ),
        h2: (props) => (
          <Heading mb={4} as="h2" size="lg" {...props} />
        ),
        h3: (props) => (
          <Heading mb={4} as="h3" size="md" {...props} />
        ),
        h4: (props) => (
          <Heading mb={4} as="h4" size="sm" {...props} />
        ),
        h5: (props) => (
          <Heading mb={4} as="h5" size="xs" {...props} />
        ),
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
