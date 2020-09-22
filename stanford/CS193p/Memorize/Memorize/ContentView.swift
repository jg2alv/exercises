//
//  ContentView.swift
//  Memorize
//
//  Created by Predator-Mac on 22/07/20.
//  Copyright © 2020 bored-user. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    var viewModel: EmojiMemoryGame
    var body: some View {
        HStack {
            ForEach(self.viewModel.cards) { card in
                CardView(card: card).onTapGesture {
                    self.viewModel.choose(card: card)
                }
            }
        }.foregroundColor(Color.orange).padding().font(Font.largeTitle)
    }
}

struct CardView : View {
    var card: MemoryGame<String>.Card
    
    var body : some View {
        ZStack {
            if self.card.isFaceUp {
                RoundedRectangle(cornerRadius: 10.0).fill(Color.white)
                RoundedRectangle(cornerRadius: 10.0).stroke(lineWidth: 3)
                Text(self.card.content)
            } else {
                RoundedRectangle(cornerRadius: 10.0).fill()
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(viewModel: EmojiMemoryGame())
    }
}
