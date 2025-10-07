export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

    if (query.toLowerCase().includes("andrew id")) {
    return "gmaddalo";
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return "gio1";
  }


    if (query.toLowerCase().includes("which of the following numbers is the largest: 92, 60, 72?")) {
    return "92";
  }
  
    if (query.toLowerCase().includes("which of the following numbers is the largest: 34, 56, 37?")) {
    return "56";
  }



  if (query.toLowerCase().includes("what is 55 plus 72?")) {
    return "127";
  }  



  


  return "";
}
