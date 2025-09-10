"use client";
import {useState} from "react";
import Image from "next/image";

export default function Home() {
  const[positives, setPositives] = useState("");
  const[lows, setLows] = useState("");
  const [sleep, setSleep] = useState("0");
  const [nutrition, setNutrition] = useState("0");
  const [TimeEfficenecy, setTimeEfficenecy] = useState("0");
  const [TimeManagement, setTimeManagement] = useState("0");

  
  return (
    <main>
      <header>
        <h1>Journal</h1>
      </header>
      <section>
        <form>
          <label htmlFor="positives">Daily Positives</label>
          <textarea id="positives" placeholder="Write about the Postives from your day"></textarea>

          <label htmlFor="lows">Daily Lows</label>
          <textarea id="lows" placeholder="Write about your lows"></textarea>

          <label htmlFor="sleep">Sleep</label>
          <select id="sleep">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <label htmlFor="nutrition">Nutrition</label>
          <select id="nutrition">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <label htmlFor="TimeManagement">Time Management</label>
          <select id="TimeManagement">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <label htmlFor="TimeEfficenecy">Time Efficenecy</label>
          <select id="TimeEfficenecy">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
