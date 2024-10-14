import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chat: [
        {
            sender: "Ankit Singh",
            message: "Hey, how are you?",
            timestamp: "10:01 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "I'm good, thanks! How about you?",
            timestamp: "10:03 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Doing well. Just finished working on a project.",
            timestamp: "10:04 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Nice! What project was it?",
            timestamp: "10:05 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "A website for a local business. Took a while but happy with the result.",
            timestamp: "10:10 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "That sounds great! I’d love to see it sometime.",
            timestamp: "10:11 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Sure! I’ll send you the link later.",
            timestamp: "10:13 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Looking forward to it!",
            timestamp: "10:15 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "By the way, have you seen the new series on Netflix?",
            timestamp: "10:15 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Oh yeah, I just started watching it last night. It’s so good!",
            timestamp: "10:16 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "I know, right? I’m on episode 5 already. It's hard to stop watching.",
            timestamp: "10:17 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Wow, you’re ahead of me. I’m still on episode 2. No spoilers!",
            timestamp: "10:18 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Haha, I won’t spoil anything. Just wait till episode 4, though. It gets intense!",
            timestamp: "10:18 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Oh no, now I’m really curious. I’ll try to catch up tonight.",
            timestamp: "10:19 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "You won’t regret it! What else have you been up to?",
            timestamp: "10:20 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Not much, just work mostly. It's been pretty busy this week.",
            timestamp: "10:20 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Yeah, I feel that. Work has been crazy for me too, but at least it's almost the weekend.",
            timestamp: "10:21 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "True! Got any plans for the weekend?",
            timestamp: "10:21 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Not sure yet. Might just relax at home, maybe catch up on some reading.",
            timestamp: "10:22 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "That sounds nice. I’ve been meaning to read more too, but it’s hard to find the time.",
            timestamp: "10:22 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "I know what you mean. It feels like there’s never enough time in the day.",
            timestamp: "10:23 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Exactly. I might try to squeeze in a few hours this weekend though.",
            timestamp: "10:23 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Good idea! What book are you planning to read?",
            timestamp: "10:24 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "I’ve had 'The Silent Patient' on my list for a while. Have you read it?",
            timestamp: "10:27 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "No, but I’ve heard it’s really good! Let me know what you think once you start.",
            timestamp: "10:30 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Will do! Have you been reading anything interesting?",
            timestamp: "10:32 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Yeah, I’ve been reading a book on productivity. It’s been pretty helpful so far.",
            timestamp: "10:32 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "That’s awesome! Maybe I should check it out too.",
            timestamp: "10:34 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "I’ll send you the title later. It’s been a game-changer for managing my time.",
            timestamp: "10:34 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "Thanks! I could definitely use some time management tips.",
            timestamp: "10:36 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Haha, can’t we all?",
            timestamp: "10:50 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "So true! Anyway, I better get back to work. Chat soon?",
            timestamp: "10:57 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        },
        {
            sender: "Ankit Singh",
            message: "Yeah, definitely! Take care.",
            timestamp: "10:58 AM",
            profileImage: 'https://avatar.iran.liara.run/public/8'

        },
        {
            sender: "Rahul Singh",
            message: "You too! Bye for now.",
            timestamp: "11:00 AM",
            profileImage: 'https://avatar.iran.liara.run/public/18'

        }
    ]
}


const chatSlice = createSlice({
    name: "Chats",
    initialState,
    reducers: {
        addMessage(state, action) {
            state.chat.push(action.payload)
        }
    }
})

export const { addMessage } = chatSlice.actions
export default chatSlice