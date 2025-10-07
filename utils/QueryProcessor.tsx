export default function QueryProcessor(query: string): string {
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerQuery.includes("andrew id")) {
    return "gmaddalo";
  }

  if (lowerQuery.includes("what is your name?")) {
    return "gio1";
  }

  // Generic handler for 'which of the following numbers is the largest: ...'
  const largestMatch = lowerQuery.match(/which of the following numbers is the largest: ([\d,\s]+)/);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    if (numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
    return "No valid numbers found.";
  }

  // Generic math query handler: e.g. 'what is 2 plus 54?'
  const mathMatch = lowerQuery.match(/what is ([\d]+)\s*(plus|minus|times|multiplied by|divided by)\s*([\d]+)\s*\?/);
  if (mathMatch) {
    const a = parseFloat(mathMatch[1]);
    const op = mathMatch[2];
    const b = parseFloat(mathMatch[3]);
    let result: number;
    switch (op) {
      case "plus": result = a + b; break;
      case "minus": result = a - b; break;
      case "times":
      case "multiplied by": result = a * b; break;
      case "divided by": result = a / b; break;
      default: return "Unknown operation.";
    }
    return result.toString();
  }


  return "";
}
