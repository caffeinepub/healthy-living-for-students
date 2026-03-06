import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Category = {
    #food;
    #exercise;
    #mental;
    #routine;
  };

  module Category {
    public func toText(category : Category) : Text {
      switch (category) {
        case (#food) { "Food" };
        case (#exercise) { "Exercise" };
        case (#mental) { "Mental" };
        case (#routine) { "Routine" };
      };
    };
  };

  type Tip = {
    id : Nat;
    title : Text;
    description : Text;
    category : Category;
  };

  module Tip {
    public func compare(tip1 : Tip, tip2 : Tip) : Order.Order {
      Text.compare(tip1.title, tip2.title);
    };
  };

  // Tips
  var nextTipId = 1;
  let tips = Map.empty<Nat, Tip>();

  public shared ({ caller }) func addTip(title : Text, description : Text, category : Category) : async Tip {
    let tip : Tip = {
      id = nextTipId;
      title;
      description;
      category;
    };
    tips.add(nextTipId, tip);
    nextTipId += 1;
    tip;
  };

  public query ({ caller }) func getAllTips() : async [Tip] {
    tips.values().toArray().sort();
  };

  public query ({ caller }) func getTipsByCategory(category : Category) : async [Tip] {
    tips.values().toArray().sort().filter(func(tip) { tip.category == category });
  };

  public query ({ caller }) func getTip(id : Nat) : async Tip {
    switch (tips.get(id)) {
      case (null) { Runtime.trap("Tip not found") };
      case (?tip) { tip };
    };
  };
};
