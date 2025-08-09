import { RequestHandler } from "express";

// In-memory storage for like counts
// In a production app, this would be stored in a database
let likeCounts: Record<number, number> = {
  1: 247, // Proply
  2: 156  // Circuit
};

export const getLikes: RequestHandler = (req, res) => {
  res.json({ likeCounts });
};

export const updateLikes: RequestHandler = (req, res) => {
  const { projectId } = req.body;
  
  if (typeof projectId !== 'number') {
    return res.status(400).json({ error: 'Invalid project ID' });
  }
  
  // Increment the like count
  likeCounts[projectId] = (likeCounts[projectId] || 0) + 1;
  
  res.json({ 
    projectId, 
    newCount: likeCounts[projectId],
    likeCounts 
  });
};
