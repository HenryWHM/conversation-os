export const MOCK_CONVERSATIONS = [
  {
    id: "1",
    name: "Sarah Jenkins",
    lastMessage: "Can we reschedule the sync to 3pm?",
    time: "10:24 AM",
    unread: 2,
    avatar: "SJ"
  },
  {
    id: "2",
    name: "Project Alpha Group",
    lastMessage: "The latest designs are ready for review.",
    time: "Yesterday",
    unread: 0,
    avatar: "PA"
  },
  {
    id: "3",
    name: "Marcus Thorne",
    lastMessage: "I'll send over the contract by EOD.",
    time: "Monday",
    unread: 0,
    avatar: "MT"
  },
];

export const MOCK_MESSAGES = [
  { id: "m1", role: "received", content: "Hi there! I was wondering if you had a chance to look at the proposal I sent over last week?", timestamp: "10:00 AM" },
  { id: "m2", role: "sent", content: "Hey! Yes, I just started going through it. It looks very promising.", timestamp: "10:05 AM" },
  { id: "m3", role: "received", content: "Great! Do you think we could jump on a quick call tomorrow to finalize the details?", timestamp: "10:06 AM" },
  { id: "m4", role: "received", content: "I'm free between 2pm and 4pm EST.", timestamp: "10:06 AM" },
];

export const MOCK_SUGGESTION = "I'd love to! Tomorrow at 3pm EST works perfectly for me. Shall I send a calendar invite?";
